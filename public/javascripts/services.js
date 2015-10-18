angular.module('meanApp.services', ['ngResource'])
	.factory('UsersSrv', ['$resource',
		function ($resource) {
			return $resource('/api/users/:id',
				{
					id: '@id'
				},
				{
					update: {
						method: "PUT",
						url: "/api/users/:id"
					}
				},
				{
					save: {
						method: "POST",
						url: "/api/users/"
					}
				}
			)

		}
	]);
