var mymodule=angular.module("mymodule",[]);
var mycontroller=function($scope){
    $scope.message="This is my first Test";
    $scope.var=['test1','test2','test3'];
    $scope.arr=[
                {name:"das",age:"29",salary:33333,available:true},
                {name:"bandhu",age:"25",salary:29999,available:true},
                {name:"braja",age:"30",salary:20000,available:true},
                {name:"pap",age:"27",salary:19999,available:false}

    ]

}
mymodule.controller("mycontroller",mycontroller);
