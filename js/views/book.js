var app = app || {};

app.BookView = Backbone.View.extend({
  tagName: 'div',
  className: 'bookContainer col-xs-6 col-md-4',
  template: _.template( $( '#bookTemplate' ).html() ),

	render: function() {
		this.$el.html( this.template( this.model.attributes ) );
		return this;
	}
});
