angular.module('meanApp.controllers', ['meanApp.services'])
       .controller('UsersCtrl',
                    ['$scope', 'UsersSrv', '$routeParams', '$location', function($scope, UsersSrv, $routeParams, $location){
                      $scope.load = function() {
                        $scope.registros = UsersSrv.query();
                      }

                      $scope.get = function() {
                				$scope.item = UsersSrv.get({id: $routeParams.id })
                			}

                      $scope.editar = function(item) {
                				$scope.result = UsersSrv.update(
                					{id: $routeParams.id},
                					item,
                					function(data, status, headers, config) {
                						$location.path("/");
                					}
                				);
                			}

                      $scope.add = function(item) {
                        console.log("Chamou");
                				$scope.result = UsersSrv.save(
                					{},
                					item,
                					function(data, status, headers, config) {
                						$location.path("/");
                					}
                				);
                			}

                      $scope.delete = function(id) {
                				if(confirm("Deseja realmente excluir esse usuário?")) {
                					$scope.result = UsersSrv.remove(
                						{id: id},
                						{},
                						function(data, status, headers, config) {
                							$location.path("/");
                						}
                					);
                				}
                			}

                      $scope.load();
                        //$scope.nome = "David Petró";
                    }]);
