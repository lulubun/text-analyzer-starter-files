function 

//collect data from form

function getFormData() {
$('.js-text-form').submit(function(event) {
    event.preventDefault();
    $('.text-report').empty();
    var userInput = $(this).find('#user-text').val();
    analyzeAll(removeReturns(userInput));
  });
}

//functions for last 3 data points

function countDistinctWords(tokens) {
	var distinctWords = [];
	for (var i = 0; i < tokens.length; i++) {
	 if (distinctWords.indexOf(tokens [i]) === -1) {
	 	distinctWords.push(tokens[i]);
	 }
	}
	return distinctWords.length;
}

function getAverageWordLength(tokens) {
	var totalLength = tokens.join("").length;
	return (totalLength/tokens.length).toFixed(1);
}

function getAverageWordsPerSentence(text) {
	var numSentences = text.match(/[.!?]+/g) ? text.match(/[.!?]+/g).length : 1;
	var wordCount = tokenizeText(text).length;
	return (wordCount / numSentences).toFixed(1)
}

//tokenizing text and removing extraneous stuff

function tokenizeText(text) {
  return text.toLowerCase().match(/\b[^\s]+\b/g).sort();

}

function removeReturns(text) {
  return text.replace(/\r?\n|\r/g, "");
}

//run all the functions

function analyzeAll(text) {
  var tokens = tokenizeText(text);
  var numTotalWords = tokens.length;
  var distinctWords = countDistinctWords(tokens);
  var averageWordLength = getAverageWordLength(tokens);
  var averageWordsPerSentence = getAverageWordsPerSentence(text);
  var textReport = $('.js-analytics');

  //display all the results

  textReport.find('.js-word-count').text(numTotalWords);
  textReport.find('.js-unique-count').text(distinctWords);
  textReport.find('.js-ave-word-length').text(averageWordLength + " characters");
  textReport.find('.js-ave-sentence-length').text(averageWordsPerSentence + " words");
  textReport.removeClass('hidden');
}
//ready to start when getFormData runs
$(function() {
	getFormData();
})