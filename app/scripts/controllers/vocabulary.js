'use strict';

angular.module('korakoraApp')
  .controller('VocabularyCtrl', function ($scope, $http) {

    $scope.status = {
      'mode': 'En2He',
      'from_label': 'Eng',
      'to_label': 'Heb',
      'from_text': '',
      'to_text_hidden': '',
      'to_text': '',
      'id': '0',
      'date': '',
      'test': 'test1111111111',
      'pass': 0,
      'visit': 0,
      'total': 0,
      'min_id': 0,
      'max_id': 2000,
      'max_ratio': 100,
      'min_visits': 2,
      'new_words_checked': 0,
      'new_word_english': "",
      'new_word_hebrew': "",
      'ratio_class': 0
    }


    $scope.next = function() {

      var url = "http://localhost:8000/words/?";
      url = url + "mode=" + $scope.status.mode;
      url = url + "&minId=" + $scope.status.min_id;
      url = url + "&maxId=" + $scope.status.max_id;
      url = url + "&maxRatio=" + ($scope.status.max_ratio / 100);
      url = url + "&minVisits=" + $scope.status.min_visits;

      $scope.status.to_text = "";
      $scope.status.pass = "";
      $scope.status.visit = "";

      console.log("URL: <" + url + ">");

      $http.get(url).success(function(response) {
        console.log(response);
        $scope.status.from_text = response['from'];
        $scope.status.to_text_hidden = response['to'];
        $scope.status.to_text = '';
        $scope.status.id = response['id'];
        $scope.status.date = response['date'];
        $scope.status.pass = response['pass'];
        $scope.status.visit = response['visit'];
        $scope.status.total = response['total'];

        var ratio = 0;
        var ratio_class = 0;
        if ($scope.status.visit > 0) {
          ratio = (($scope.status.pass*1.0) / $scope.status.visit);
          ratio_class = Math.floor(ratio * 5)
          console.log("ratio:" + ratio + ", ratio_class:" + ratio_class);
          $scope.status.ratio_class = ratio_class;
        }
      });
    };

    $scope.check = function() {
      $scope.status.to_text = $scope.status.to_text_hidden;
    };

    $scope.correct = function() {
      console.log("correct was clicked");
      var url = "http://localhost:8000/words/?mode=" + $scope.status.mode + "&op=PASS&id=" + $scope.status.id;
      console.log(url);
      $http.get(url).success(function(response) {
        console.log("Correct returned with:");
        console.log(response);
      });
      $scope.next();
    };

    $scope.wrong = function() {
      console.log("wrong was clicked");
      var url = "http://localhost:8000/words/?mode=" + $scope.status.mode + "&op=FAIL&id=" + $scope.status.id;
      console.log(url);
      $http.get(url).success(function(response) {
        console.log("Wring returned with:");
        console.log(response);
      });
      $scope.next();
    };

    $scope.modeChange = function(value) {
      console.log("mode changed to " + value);
      if ($scope.status.mode == "En2He") {
        $scope.status.from_label = 'Eng';
        $scope.status.to_label = 'Heb';
      } else {
        $scope.status.from_label = 'Heb';
        $scope.status.to_label = 'Eng';
      }
    }

    $scope.setNewWordsChecked = function() {
      console.log("setNewWordsChecked: " + $scope.status.new_words_checked)
    }

    $scope.addNewWord = function() {
       var url = "http://localhost:8000/words/?op=NEW&new_eng=" + $scope.status.new_word_english + "&new_heb=" + $scope.status.new_word_hebrew;
       console.log(url);
       $http.get(url).success(function(response) {
        console.log("Added new word");
        console.log(response);
        $scope.status.new_word_english = "";
        $scope.status.new_word_hebrew = "";
       });
    }

  });
