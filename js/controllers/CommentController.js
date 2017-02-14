app.controller ('CommentController', [
  '$scope', 
  '$routeParams', 
  'suggestions', 
  function($scope, $routeParams, suggestions) {

	$scope.post = suggestions.posts[$routeParams.id];
   

    //comment function //
    $scope.addComment = function() {   

     	if (!$scope.body || $scope.body === '') {
	
                return;
            }
    //  if ($scope.body.trim() !== "") {
        let comment = {
          body: $scope.body,
          upvotes: 0 
        };
        $scope.post.comments.push(comment);
        $scope.body = "";
      };
    //};
    //Upvote for comment//
        $scope.upVote = function(comment) {
        
        comment.upvotes += 1;
	}
        

  }
]);
