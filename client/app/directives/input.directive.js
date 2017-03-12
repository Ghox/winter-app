(
    function () {
        angular.module('winter').directive('inputFocus', inputFocus);
        inputFocus.$inject=['$window']
        function inputFocus($window) {
            return{

                link: function (scope, element, attributes) {
                    scope.element = element;

                    element.bind('mouseover',function () {
                        scope.element.focus();
                        scope.$apply();
                    });
                    element.bind("mousewheel DOMMouseScroll",function(event){
                        var delta = event.detail || event.originalEvent.deltaY;
                        event.preventDefault();
                        if(delta<0){
                            event.target.value = event.target.value?parseInt(event.target.value)+1:1;
                        }else{
                            event.target.value = event.target.value?parseInt(event.target.value)-1:-1;
                        }
                    });
                }
            }
        }

    }
)();