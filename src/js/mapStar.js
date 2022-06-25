export default class Settings{
    constructor(theme, music, difficulty) {
      this.settings = new Map([
        ['default', {
            theme: 'dark', 
            music: 'trance', 
            difficulty: 'easy'
        }]
      ])
        
      this.settings.set('custom', {theme, music, difficulty})
    }

    getSettings() {
      for (let key in this.settings.get('custom')) {
        if (this.settings.get('custom')[key]  === undefined) {
          this.settings.get('custom')[key] = this.settings.get('default')[key]
        }
      }
      
      return this.settings.get('custom');
    }
}