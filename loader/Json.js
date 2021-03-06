Ext.define('Mba.ux.BuilderConfig.loader.Json', {
    extend: 'Mba.ux.BuilderConfig.loader.LoaderAbstract',
    //requires: [ 'Ext.Ajax' ],

    config: {
        files: {}
    },

    mergeFiles: function(files)
    {
        Ext.Object.merge(this.files, files);
    },

    loadData: function()
    {
        var result = {}, files = this.getFiles(), index;
        for (index in files) {
            Ext.Ajax.request({
                method: 'GET',
                url: files[index],
                responseType: 'text',
                async: false,
                success: function(response) {
                    result[index] = Ext.decode(response.responseText);
                }
            });
        }
        return result;
    }
});
