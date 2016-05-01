/* globals module */

module.exports = {
    afterInstall: function() {
        return this.addAddonsToProject({
            packages: [
                { name: 'broccoli-file-creator', target: '~1.1.0' },
                { name: 'broccoli-merge-trees', target: '~1.1.1' }
            ]
        });
    },

    normalizeEntityName: function() {}
};
