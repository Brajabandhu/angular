var mymodule=angular.module("mymodule",[]);
var mycontroller=function($scope){
    $scope.message="This is my first Test";
    $scope.var=['test1','test2','test3'];
    $scope.arr=[
                {name:"das",age:"29",salary:33333},
                {name:"bandhu",age:"25",salary:29999},
                {name:"braja",age:"30",salary:20000}

    ]

}
mymodule.controller("mycontroller",mycontroller);
