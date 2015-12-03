export default ngModule => {
   ngModule.directive('kcdHello', () => {
      require('./kcd-hello.styl');
      return {
         restrict: 'E',
         scope: {},
         //templateUrl: 'directives/kcd-hello.html',
         template: require('./kcd-hello.html'),
         controllerAs: 'vm',
         controller: function(){
            const vm = this;
            vm.greeting = 'Hello Webpack :)';
            console.log('--- scope ---');
            console.log(vm);
         }
      };
   });
};