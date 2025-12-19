Hooks.on('init', () => {
  
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: 'daggerheart-ptbr',
      lang: 'pt-BR',
      dir: 'compendiums'
    })
  }
  
})
