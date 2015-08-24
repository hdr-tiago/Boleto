Ext.define('Boleto.view.boleto.BoletoDetalheController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.boletoDetalhe',

    /*requires: [
        'Boleto.view.beneficiario.Beneficiario'
    ],*/

    onClickGerar: function(btn, e, eOpts) {
        var me = this;
        var view = this.getView();
        var win = btn.up('window');

        var obj = view.getViewModel().get('boletoDetalhe');
        var banco = view.getViewModel().get('banco');

        obj.banco = Ext.util.Format.uppercase(banco);
        var record = Ext.create('Boleto.model.Boleto', obj);
        view.mask('Gerando Boleto...');

        record.save({
            success: function(record) {
                me.fireViewEvent('salvadoComSucesso', me.getView(), record);
                view.unmask();
                Ext.Msg.alert('IBoleto', 'Boleto gerado com sucesso.');
                win.close();
            }
        });
    },

    onClickButton: function() {

        localStorage.removeItem('TutorialLoggedIn');

        this.getView().destroy();

        Ext.widget('login');

    },

    onClickTeste: function(btn, e, eOpts) {
        var window = btn.up('window');
        var form = window.down('form');
        form.getForm().reset();
        window.close();
    },

    onClickSair: function(btn, e, eOpts) {
        var me = this;
        var view = this.getView();
        var win = btn.up('window');
        win.close();
    }

});