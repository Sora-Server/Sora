exports.BattleScripts = {
        inherit: 'gen6',
        gen: 6,
        init: function() {
                //Pokemon that can learn Stone Spine
                this.modData('Learnsets', 'larvitar').learnset.stonespine = ['5M'];
