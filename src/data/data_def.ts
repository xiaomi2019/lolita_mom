module data{
    export function init_data_module()
    {
        utils.data_ins().register_data(data_enum.DATA_ACCOUNT,data.account_data);
        utils.data_ins().register_data(data_enum.DATA_PLAYER,data.player_data);
        utils.data_ins().register_data(data_enum.DATA_CARD,data.card_data);
        utils.data_ins().register_data(data_enum.DATA_TIPS,data.tips_data);
        utils.data_ins().register_data(data_enum.DATA_MSGBOX,data.msgbox_data);
        utils.data_ins().register_data(data_enum.DATA_SCENE,data.scene_data);
        utils.data_ins().register_data(data_enum.DATA_CHAT,data.channel_data);
        utils.data_ins().register_data(data_enum.DATA_SVRLIST,data.svrlist_data);
        utils.data_ins().register_data(data_enum.DATA_TRANSFER,data.transfer_data);
    }
    export function get_data(data_name:string):utils.game_data
    {
        return utils.data_ins().get_data(data_name);
    }
}