var app = app || {};

app.LibraryView = Backbone.View.extend({
	el: '#showbooks',

	initialize: function( initialBooks ){
		this.collection = new app.Library( initialBooks );
		this.render();
	},

	render: function(){
		this.collection.each(function( item ){
			this.renderBook( tiem );
		}, this );
	},

	renderBook: function( item ){
		var bookView = new app.BookView({
			model: item
		});
		this.$el.append( bookView.render().el );
	}
});
