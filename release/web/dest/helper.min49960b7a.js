var helper;!function(helper){helper.do_test=function(data_arr){var head=data_arr[0];"closestat"==head?Laya.Stat.hide():"combat"==head&&utils.event_ins().fire_event_next_frame(game_event.EVENT_TESTCOMBATPROTO)}}(helper||(helper={})),function(helper){function createSpanTag(color,fSize){return'<span style="color:'+color+"; font-size:"+fSize+'px;">'}function createLinkTag(color,fSize,urlData,info){return'<span href="'+urlData+'" style="color:'+color+"; font-size:"+fSize+'px;">'+info+"</span>"+helper.createSpanTag(color,fSize)}function createImgTag(imgUrl){return'<img src="'+imgUrl+'"/>'}helper.create_format_link=function(text,htype,u1,u2,u3,color){void 0===color&&(color="#C18&"),255<text.length&&(text=text.substr(0,255));var len=text.length.toString(16);return text.length<16?color+"#H&l0"+len+"("+text+","+htype+","+u1+","+u2+","+u3+")#D&":color+"#H&l"+len+"("+text+","+htype+","+u1+","+u2+","+u3+")#D&"},helper.trans_info=function(info){for(var temp=info,markAb="",tempArr=temp.split("#"),markAbArr=[],i=0;i<tempArr.length;i++)tempArr[i]="#"+tempArr[i],tempArr[i].match(/#\d{1,3}/)&&(markAb=tempArr[i].match(/#\d{1,3}/)[0],markAbArr.push(markAb));var ele="";for(i=0;i<markAbArr.length;i++)ele=markAbArr[i],base.FORMAT_EMOTION[ele]||(markAbArr[i]=ele.substr(0,ele.length-1),ele=markAbArr[i],base.FORMAT_EMOTION[ele]||(markAbArr[i]=ele.substr(0,ele.length-1),ele=markAbArr[i]));return markAbArr.forEach(function(element){temp.match(element)&&(temp=temp.replace(element,base.FORMAT_EMOTION[element]))}),core.game_tiplog(temp),temp},helper.analysisMsgStr=function(msgString,dColor,dFSize){void 0===dColor&&(dColor="#FACD89"),void 0===dFSize&&(dFSize="44");for(var data=msgString,htmlStr="",curColor=dColor,curFSize=dFSize,curStyleStr="",inEdit=!1,isOpen=!1,temp="",index=0,isFont=!1,cur_str="",isColor=!1,isHlink=isFont=!1,isPic=!1,isEmoji=!1,isFEnd=!1,isCEnd=!1,i=0;i<data.length;i++){if("#"==data[i]){if(!data[i+1]){htmlStr+=data[i];continue}if("C"==data[i+1])for(index=i+2,temp=data[i]+data[i+1];index<data.length;index++){if("&"==(cur_str=data[index])&&temp[temp.length-1].match(/\d/)){curStyleStr=temp+=cur_str,isColor=inEdit=!(temp=""),i=index;break}if(!cur_str.match(/\d/)){temp="";break}temp+=cur_str}else if("F"==data[i+1])for(index=i+2,temp=data[i]+data[i+1];index<data.length;index++){if("&"==(cur_str=data[index])&&temp[temp.length-1].match(/\d/)){curStyleStr=temp+=cur_str,isFont=inEdit=!(temp=""),i=index;break}if("D"==cur_str)temp+=cur_str;else{if("&"==cur_str&&"D"==temp[temp.length-1]){curStyleStr=temp+=cur_str,isFEnd=inEdit=!(temp=""),i=index;break}if(!cur_str.match(/\d/)){temp="";break}temp+=cur_str}}else if("H"==data[i+1])data[i+2]&&data[i+3]&&data[i+4]&&data[i+5]&&"&"==data[i+2]&&"l"==data[i+3]&&data[i+4].match(/[0-9a-fA-F]/)&&data[i+5].match(/[0-9a-fA-F]/)&&(curStyleStr=data[i]+data[i+1]+data[i+2]+data[i+3]+data[i+4]+data[i+5],isHlink=inEdit=!0,i+=5);else if("P"==data[i+1])for(index=i+2,temp=data[i]+data[i+1];index<data.length;index++){if("&"==(cur_str=data[index])&&temp[temp.length-1].match(/\d/)){curStyleStr=temp+=cur_str,isPic=inEdit=!(temp=""),i=index;break}if(!cur_str.match(/\d/)){temp="";break}temp+=cur_str}else if("E"==data[i+1])for(index=i+2,temp=data[i]+data[i+1];index<data.length;index++){if("&"==(cur_str=data[index])&&temp[temp.length-1].match(/\d/)){curStyleStr=temp+=cur_str,isEmoji=inEdit=!(temp=""),i=index;break}if(!cur_str.match(/\d/)){temp="";break}temp+=cur_str}else"D"==data[i+1]&&"&"==data[i+2]?(inEdit=isCEnd=!0,i+=2):"F"==data[i+1]&&"D"==data[i+2]&&"&"==data[i+3]&&(isFEnd=inEdit=!0,i+=3)}if(inEdit)if(isColor)isColor=!1,isOpen&&(htmlStr+="</span>",isOpen=!1),htmlStr+=createSpanTag(curColor=base.FORMAT_COLOR[curStyleStr],curFSize),inEdit=!(isOpen=!(curStyleStr=""));else if(isFont)isFont=!1,isOpen&&(htmlStr+="</span>",isOpen=!1),htmlStr+=createSpanTag(curColor,curFSize=base.FORMAT_FONT[curStyleStr]),inEdit=!(isOpen=!(curStyleStr=""));else if(isHlink){isHlink=!1;for(var j=i+1;j<data.length&&"("!=data[j];j++)curStyleStr+=data[j];for(var tagInfo,nameLen=curStyleStr.replace("#H&l",""),nameLenNum=parseInt(nameLen,16),urlData="",k=j+1;k<data.length;k++)if("&"==data[k]?urlData+="&amp;":"<"==data[k]?urlData+="&lt;":" "==data[k]?urlData+="&nbsp;":">"==data[k]?urlData+="&gt;":urlData+=data[k],")"==data[k]){if(urlData.length<=nameLenNum+2)continue;urlData=urlData.substr(0,urlData.length-1);break}var arr=urlData.split(",");tagInfo=arr[0],arr.splice(0,1),i=k,isOpen&&(htmlStr+="</span>",isOpen=!1),htmlStr+=createLinkTag(curColor,curFSize,urlData=tagInfo+","+arr.toString(),tagInfo),inEdit=!(isOpen=!(curStyleStr=""))}else isPic?(isOpen&&(htmlStr+="</span>",isOpen=!1),htmlStr+=createImgTag(base.SET_PICTURE_URL[curStyleStr]),isPic=inEdit=!1,curStyleStr=""):isEmoji?(isOpen&&(htmlStr+="</span>",isOpen=!1),htmlStr+=createImgTag(base.SET_EMOTION_URL[curStyleStr]),isEmoji=inEdit=!1,curStyleStr=""):isFEnd?(curFSize=dFSize,isOpen&&(htmlStr+="</span>",isOpen=!1),curStyleStr="",inEdit=!1):isCEnd&&(curColor=dColor,isOpen&&(htmlStr+="</span>",isOpen=!1),curStyleStr="",inEdit=!1);else"&"==data[i]?htmlStr+="&amp;":" "==data[i]?htmlStr+="&nbsp;":"<"==data[i]?htmlStr+="&lt;":">"==data[i]?htmlStr+="&gt;":htmlStr+=data[i]}return isOpen&&(htmlStr+="</span>"),htmlStr},helper.createSpanTag=createSpanTag,helper.createLinkTag=createLinkTag,helper.createImgTag=createImgTag}(helper||(helper={})),function(helper){function show_text_tips(text){game.get_module(module_enum.MODULE_TIPS).show_tips({text:text})}function is_join_gang(){return!1}function init_empty_desc(){for(var ret=new Laya.Byte(15),i=ret.pos=0;i<15;++i)ret.writeUint8(0);return ret}function get_skin_fdesc(desc){return desc.pos=0,desc.getUint8()}function get_weapon_fdesc(desc){return desc.pos=2,desc.getUint8()}function get_ride_fdesc(desc){return desc.pos=4,desc.getUint8()}function get_wing_fdesc(desc){return desc.pos=6,desc.getUint8()}function get_fairy_fdesc(desc){return desc.pos=8,desc.getUint8()}function get_aura_fdesc(desc){return desc.pos=10,desc.getUint8()}function get_title_fdesc(desc){return desc.pos=11,desc.getUint8()}function _get_post_value_by_shape(shape,aid){return aid+(shape-base.HUMAN_MALE)}function get_avatar_atlas(cfg,action){if(null!=cfg)for(var _i=0,_a=cfg.info_data;_i<_a.length;_i++){var i=_a[_i];if(i.aid==action)return{url:"avatar/"+i.path,type:Laya.Loader.ATLAS}}return null}helper.get_cur_milltime=function(){return laya.utils.Browser.now()},helper.get_cur_secstime=function(){return Math.round(laya.utils.Browser.now()/1e3)},helper.get_random_int=function(min,max){var min_int=Math.floor(min),max_int=Math.floor(max),radio=Math.random();return Math.floor(min_int+(max_int-min_int)*radio)},helper.convert_time_2_arr=function(secs){if(secs<=0)return[0,0,0,0];var time_list=new Array,value=0,result=0;return value=secs/86400,result=parseInt(value.toString()),time_list.push(result),value=(secs-=86400*result)/3600,result=parseInt(value.toString()),time_list.push(result),value=(secs-=3600*result)/60,result=parseInt(value.toString()),time_list.push(result),secs-=60*result,result=parseInt(secs.toString()),time_list.push(result),time_list},helper.convert_time_2_fotmatStr=function(secs){if(secs<=0)return"";var time_list=this.convert_time_2_arr(secs),day=time_list[0],hour=time_list[1],minu=time_list[2],sec=time_list[3],str="";return 0<day&&(str+=day.toString()+game.L_TIAN),(0<hour||0<day)&&(str+=hour.toString()+game.L_XIAOSHI),str+=minu.toString()+game.L_FEN+sec.toString()+game.L_MIAO},helper.format_timestamp_2_arr=function(timestamp){var date_arr=new Array,date=new Date(1e3*timestamp);return date_arr.push(date.getFullYear()),date_arr.push(date.getMonth()+1),date_arr.push(date.getDate()),date_arr.push(date.getHours()),date_arr.push(date.getMinutes()),date_arr.push(date.getSeconds()),date_arr},helper.format_timestamp_2_str=function(timestamp){var time_arr=this.format_timestamp_2_arr(timestamp),time_str="";return time_str+=time_arr[0].toString(),time_str+="-",time_str+=time_arr[1].toString(),time_str+="-",time_str+=time_arr[2].toString(),time_str+=" ",time_str+=10<=time_arr[3]?time_arr[3].toString():"0"+time_arr[3].toString(),time_str+=":",time_str+=10<=time_arr[4]?time_arr[4].toString():"0"+time_arr[4].toString(),time_str+=":",time_str+=10<=time_arr[5]?time_arr[5].toString():"0"+time_arr[5].toString()},helper.center_widget=function(m_ui,delay_x,delay_y){if(void 0===delay_x&&(delay_x=0),void 0===delay_y&&(delay_y=75),m_ui){var d_w=Laya.stage.designWidth,d_h=Laya.stage.designHeight;m_ui.x=(d_w-m_ui.width)/2-delay_x,m_ui.y=(d_h-m_ui.height)/2-delay_y}},helper.add_widget_hitArea=function(m_ui){if(m_ui){var d_w=Laya.stage.designWidth,d_h=Laya.stage.designHeight,graphics=new Laya.Graphics;graphics.save(),graphics.alpha(.5),graphics.drawRect(-m_ui.x,-m_ui.y,d_w,d_h,"#000000"),graphics.restore(),m_ui.graphics=graphics,m_ui.hitArea=new Laya.Rectangle(-m_ui.x,-m_ui.y,d_w,d_h)}},helper.remove_widget_hitArea=function(m_ui){m_ui&&(m_ui.graphics=null,m_ui.hitArea=null)},helper.is_arrays_equal=function(arr1,arr2){if(null==arr1||null==arr2)return!1;if(arr1.length!=arr2.length)return!1;for(var i=0;i<arr1.length;i++)if(arr1[i]!==arr2[i])return!1;return!0},helper.is_dict_equal=function(dict1,dict2){if(null==dict1||null==dict2)return!1;if(dict1.keys.length!=dict2.keys.length)return!1;for(var _i=0,_a=dict1.keys;_i<_a.length;_i++){var key=_a[_i];if(dict1.get(key)!=dict2.get(key))return!1}return!0},helper.format_number=function(value,b_odd){if(void 0===b_odd&&(b_odd=!0),value<=1)return b_odd?"":value.toString();if(1<value&&value<1e5)return value.toString();var num_str=value.toString(),wan_str="",one_str="",unit_str=game.L_WAN;if(1e5<=value&&value<1e6)wan_str=num_str.slice(0,2),one_str=num_str.slice(2,4);else if(1e6<=value&&value<1e7)wan_str=num_str.slice(0,3),one_str=num_str.slice(3,5);else if(1e7<=value&&value<1e8)wan_str=num_str.slice(0,4),one_str=num_str.slice(4,5);else if(1e8<=value&&value<1e9)wan_str=num_str.slice(0,1),one_str=num_str.slice(1,4),unit_str=game.L_YI;else if(1e9<=value&&value<1e10)wan_str=num_str.slice(0,2),one_str=num_str.slice(2,5),unit_str=game.L_YI;else{if(!(1e10<=value&&value<1e11))return Math.floor(value/1e8).toString()+game.L_YI;wan_str=num_str.slice(0,3),one_str=num_str.slice(3,5),unit_str=game.L_YI}for(;0<one_str.length&&"0"==one_str.slice(-1);)one_str=one_str.substring(0,one_str.length-1);return 0<one_str.length?wan_str+"."+one_str+unit_str:wan_str+unit_str},helper.show_text_tips=show_text_tips,helper.show_float_text_tips=function(text,x,y){utils.widget_ins().show_widget(widget_enum.WIDGET_TEXTTIPS,!0,[text,x,y,!1])},helper.show_center_text_tips=function(text){utils.widget_ins().show_widget(widget_enum.WIDGET_TEXTTIPS,!0,[text,0,0,!0])},helper.hide_float_text_tips=function(){utils.widget_ins().show_widget(widget_enum.WIDGET_TEXTTIPS,!1)},helper.show_format_text_tips=function(f_text){var text=helper.analysisMsgStr(f_text);game.get_module(module_enum.MODULE_TIPS).show_tips({text:text})},helper.get_ColorCode_by_quality=function(quality,b_light){return void 0===b_light&&(b_light=!1),quality==base.QT_GRAY?"#C0&":quality==base.QT_GREEN?0==b_light?"#C1&":"#C18&":quality==base.QT_BLUE?0==b_light?"#C2&":"#C12&":quality==base.QT_PURPLE?0==b_light?"#C3&":"#C19&":quality==base.QT_GOLD?0==b_light?"#C4&":"#C15&":quality==base.QT_RED?0==b_light?"#C5&":"#C20&":"#C0&"},helper.show_msgbox=function(p_content){utils.module_ins().get_module(module_enum.MODULE_SYS_MSG).show_msgbox(p_content)},helper.show_choose_msgbox=function(p_caller,p_content,p_user_data,NoTips_keys){void 0===p_user_data&&(p_user_data=null),void 0===NoTips_keys&&(NoTips_keys=""),utils.module_ins().get_module(module_enum.MODULE_SYS_MSG).show_msg_box(p_caller,p_content,p_user_data,NoTips_keys)},helper.get_sex=function(shape){return shape%2==1?base.SEX_MALE:base.SEX_FEMALE},helper.get_role_head=function(shape){return shape==base.HUMAN_MALE?"ui/sys/head_gg.png":shape==base.HUMAN_FEMALE?"ui/sys/head_mm.png":""},helper.html_filter=function(str){return-1==str.indexOf("<")&&-1==str.indexOf(">")&&-1==str.indexOf("/")&&-1==str.indexOf("\\")&&-1==str.indexOf("&")},helper.get_local=function(key){return Laya.LocalStorage.getItem(key)},helper.set_local=function(key,v){return Laya.LocalStorage.setItem(key,v)},helper.get_design_w=function(){return Laya.stage.designWidth},helper.get_design_h=function(){return Laya.stage.designHeight},helper.get_design_wh=function(){return{w:Laya.stage.designWidth,h:Laya.stage.designHeight}},helper.play_sound=function(url){utils.module_ins().get_module(module_enum.MODULE_SOUND).play_sound(url)},helper.stop_sound=function(url){utils.module_ins().get_module(module_enum.MODULE_SOUND).stop_sound(url)},helper.TOPBAR_HEIGHT=0,helper.main_chat="main_chat",helper.friend_chat="friend_chat",helper.chat_input_dict=new Laya.Dictionary,helper.g_focus_ui="",helper.set_focus_str=function(s){helper.g_focus_ui=s},helper.get_focus_str=function(){return helper.g_focus_ui},helper.clear_focus_str=function(){helper.g_focus_ui=""},helper.is_join_gang=is_join_gang,helper.is_sys_open=function(sys_name,b_tips){void 0===b_tips&&(b_tips=!1);var flag=!1,cfg=config.Sys_open.get_Sys_open(sys_name);if(null==cfg&&(cfg=config.Sys_open_activity.get_Sys_open_activity(sys_name)),null!=cfg){var condition=cfg.condition,cdt_value=cfg.value;1==condition?flag=utils.data_ins().get_data(data_enum.DATA_PLAYER).m_lv>=cdt_value:2==condition&&(flag=!1),0==flag&&b_tips&&show_text_tips(cfg.tips)}return flag},helper.is_wlmz_scene=function(){var scene_id=utils.data_ins().get_data(data_enum.DATA_PLAYER).m_sid;return scene_id>=base.CROSS_WLMZ_SCENE_START&&scene_id<=base.CROSS_WLMZ_SCENE_END},helper.is_guaji_scene=function(){var scene_id=utils.data_ins().get_data(data_enum.DATA_PLAYER).m_sid;return scene_id>=base.GUAJI_SCENE_START&&scene_id<=base.GUAJI_SCENE_END},helper.is_cross_server_scene=function(){var pdata=utils.data_ins().get_data(data_enum.DATA_PLAYER);return pdata.m_sid>=base.CROSS_SERVER_SCENE_START&&pdata.m_sid<=base.CROSS_SERVER_SCENE_END},helper.mine=function(){return utils.data_ins().get_data(data_enum.DATA_PLAYER)},helper.init_empty_desc=init_empty_desc,helper.deepcopy_desc=function(src){src.length<15&&(src=init_empty_desc()),src.pos=0;for(var ret=new Laya.Byte(15),i=0;i<15;++i)ret.writeUint8(src.getUint8());return ret},helper.set_skin_fdesc=function(desc,v){desc.pos=0,desc.writeUint8(v)},helper.set_weapon_fdesc=function(desc,v){desc.pos=2,desc.writeUint8(v)},helper.set_ride_fdesc=function(desc,v){desc.pos=4,desc.writeUint8(v)},helper.set_wing_fdesc=function(desc,v){desc.pos=6,desc.writeUint8(v)},helper.set_fairy_fdesc=function(desc,v){desc.pos=8,desc.writeUint8(v)},helper.set_aura_fdesc=function(desc,v){desc.pos=10,desc.writeUint8(v)},helper.set_title_fdesc=function(desc,v){desc.pos=11,desc.writeUint8(v)},helper.get_skin_fdesc=get_skin_fdesc,helper.get_weapon_fdesc=get_weapon_fdesc,helper.get_ride_fdesc=get_ride_fdesc,helper.get_wing_fdesc=get_wing_fdesc,helper.get_fairy_fdesc=get_fairy_fdesc,helper.get_aura_fdesc=get_aura_fdesc,helper.get_title_fdesc=get_title_fdesc,helper.get_title_ani_res=function(t_id){if(null!=config.Titleresinfo.get_Titleresinfo(t_id)){var e_id=config.Titleresinfo.get_Titleresinfo(t_id).aid,e_cfg=config.Effectinfo.get_Effectinfo(e_id);if(null!=e_cfg)return e_cfg.path}return""},helper.get_title_atlas_res=function(t_id){if(null!=config.Titleresinfo.get_Titleresinfo(t_id)){var e_id=config.Titleresinfo.get_Titleresinfo(t_id).aid,e_cfg=config.Effectinfo.get_Effectinfo(e_id);if(null!=e_cfg)return e_cfg.res}return""},helper._get_post_value_by_shape=_get_post_value_by_shape,helper.parse_avatar_desc=function(desc,rd,pid,shape){if(null==rd||0==pid||0==shape)return 0;var ra=rd.getunit(pid);if(null==ra)return 0;if(null==desc||desc.length<15)return 0;var skin=get_skin_fdesc(desc),weapon=get_weapon_fdesc(desc),ride=get_ride_fdesc(desc),wing=get_wing_fdesc(desc),fairy=get_fairy_fdesc(desc),aura=get_aura_fdesc(desc),title=get_title_fdesc(desc),aid=0;if(0!=skin&&null!=config.Skininfo.get_Skininfo(skin)&&(aid=config.Skininfo.get_Skininfo(skin).aid,ra.change_shape(_get_post_value_by_shape(shape,aid))),0!=aura?null!=config.Auraresinfo.get_Auraresinfo(aura)&&(aid=config.Auraresinfo.get_Auraresinfo(aura).aid,ra.change_aura(aid)):ra.change_aura(0),0!=title?null!=config.Titleresinfo.get_Titleresinfo(title)&&(aid=config.Titleresinfo.get_Titleresinfo(title).aid,ra.change_title(aid)):ra.change_title(0),0!=weapon?null!=config.Weaponinfo.get_Weaponinfo(weapon)&&(aid=config.Weaponinfo.get_Weaponinfo(weapon).aid,ra.change_weapon(aid,!0)):ra.change_weapon(0,!0),0!=ride){if(null!=config.Rideinfo.get_Rideinfo(ride)){aid=config.Rideinfo.get_Rideinfo(ride).faid;var baid=config.Rideinfo.get_Rideinfo(ride).baid;ra.change_ride(aid,baid),ra.set_ride_h(30)}}else ra.change_ride(0,0),ra.set_ride_h(30);if(0!=wing?null!=config.Winginfo.get_Winginfo(wing)&&(aid=config.Winginfo.get_Winginfo(wing).aid,ra.change_wing(aid)):ra.change_wing(0),0!=fairy){if(rd.clear_all_follow(pid),null!=config.Fairyinfo.get_Fairyinfo(fairy)){aid=config.Fairyinfo.get_Fairyinfo(fairy).aid;var f_id=rd.addunit("",aid,0,0);rd.set_follow_id(f_id,pid);var chase_role=rd.getunit(f_id);return chase_role.set_dxy(0,-100),chase_role.show_shadow(!1),chase_role.change_dir(3),f_id}}else rd.clear_all_follow(pid);return 0},helper.get_avatar_res=function(desc,shape,action){var ret=[],skin=get_skin_fdesc(desc),weapon=get_weapon_fdesc(desc),ride=get_ride_fdesc(desc),wing=get_wing_fdesc(desc),aid=0,a_path=null;if(0!=skin?null!=config.Skininfo.get_Skininfo(skin)&&(aid=config.Skininfo.get_Skininfo(skin).aid,null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(aid),action))&&ret.push(a_path)):null!=config.Avatarinfo.get_Avatarinfo(shape)&&null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(shape),action))&&ret.push(a_path),0!=weapon&&null!=config.Weaponinfo.get_Weaponinfo(weapon)&&(aid=config.Weaponinfo.get_Weaponinfo(weapon).aid,null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(aid),action))&&ret.push(a_path)),0!=wing&&null!=config.Winginfo.get_Winginfo(wing)&&(aid=config.Winginfo.get_Winginfo(wing).aid,null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(aid),action))&&ret.push(a_path)),0!=ride&&null!=config.Rideinfo.get_Rideinfo(ride)){aid=config.Rideinfo.get_Rideinfo(ride).faid;var baid=config.Rideinfo.get_Rideinfo(ride).baid;null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(aid),action))&&ret.push(a_path),null!=(a_path=get_avatar_atlas(config.Avatarinfo.get_Avatarinfo(baid),action))&&ret.push(a_path)}return ret},helper.get_map_res=function(sid){for(var ret=[],sobj=config.Mapinfo.get_Mapinfo(sid),wnum=sobj.w/128,hnum=sobj.h/128,i=0;i<wnum;++i)for(var j=0;j<hnum;++j){var p="map/city/"+sid.toString()+"/"+sid.toString()+"_tile/"+j.toString()+"_"+i.toString()+".png";ret.push({url:p,type:Laya.Loader.IMAGE})}return ret},helper.set_transfer_data=function(key_str,user_data){data.get_data(data_enum.DATA_TRANSFER).add_transfer_data(key_str,user_data)},helper.get_transfer_data=function(key_str){return data.get_data(data_enum.DATA_TRANSFER).get_transfer_data(key_str)},helper.remove_transfer_data=function(key_str){data.get_data(data_enum.DATA_TRANSFER).remove_transfer_data(key_str)}}(helper||(helper={}));