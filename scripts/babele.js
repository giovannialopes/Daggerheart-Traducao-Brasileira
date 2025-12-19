Hooks.on('init', () => {
  
  if (typeof Babele !== 'undefined') {
    game.babele.register({
      module: 'daggerheart-brazilian',
      lang: 'pt-BR',
      dir: 'compendiums'
    })
  }
  
})
