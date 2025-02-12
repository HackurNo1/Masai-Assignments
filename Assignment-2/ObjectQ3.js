let sentenceBuilder = {
  subject: "I",
  verb: "am",
  object: "coding.",

  buildSentence: function () {
    let ans =
      this.subject === "" || this.verb === "" || this.object === ""
        ? "Incomplete sentence"
        : this.subject + " " + this.verb + " " + this.object;
    console.log(ans);
  },

  updateProperty: function (key, value) {
    if (this.hasOwnProperty(key)) {
      this[key] = value;
    } else {
      console.log("Invalid property");
    }
  },
};

sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("verb", "am learning");
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("subject", "The cat");
sentenceBuilder.updateProperty("verb", "is learning");
sentenceBuilder.buildSentence();
sentenceBuilder.updateProperty("mood", "happy");
sentenceBuilder.updateProperty("verb", "");
sentenceBuilder.buildSentence();
