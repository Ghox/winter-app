(
    function () {
        angular.module('winter').directive('inputNumberIncrease', inputFocus);
        inputFocus.$inject=['$window']
        function inputFocus($window) {
            return{
                scope: {
                    amountIncrease: '='
                },
                link: function (scope, element, attributes) {
                    scope.element = element;
                    element.bind("mousewheel DOMMouseScroll",function(event){
                        var delta = event.detail || event.originalEvent.deltaY;
                        event.preventDefault();
                        if(delta<0){
                            scope.amountIncrease = event.target.value?parseInt(event.target.value)+1:1;
                        }else{
                            scope.amountIncrease = event.target.value?parseInt(event.target.value)-1:-1;
                        }
                        scope.$apply();
                    });
                }
            }
        }

    }
)();