var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer col-xs-6 col-md-4',
  template: _.template( $( '#bookTemplate' ).html() ),

	events:{
		'click #add': 'addMe',
		'click .delete': 'deleteBook'
	},
	addMe: function(){
		console.log("Worked");
	},
	deleteBook: function(){
		console.log("Worked Again");
		this.model.destroy();
		this.remove();
	},

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	}
});
