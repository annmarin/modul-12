function Card(id, name) {
    var self = this;

    this.id = id;
    this.name = name || 'No name given';
    this.element = createCard();

    function createCard() {
        var card = $("<li>").addClass("card");
        var cardDescription = $("<p>").addClass("card-description").text(self.name);
        var cardDelete = $("<button>").addClass("btn-delete-card").text("X");

        cardDelete.click(function() {
            self.removeCard();
        });

        card.append(cardDelete)
            .append(cardDescription);

        return card;
    }; //createCard
}; // Card(description)

Card.prototype = {
    removeCard: function() {
        var self = this;
        $.ajax({
            url: baseUrl + '/card/' + self.id,
            method: 'DELETE',
            success: function(){
                self.element.remove();
            }
        });     
    }
};      