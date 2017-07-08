board = {
    name: "Kanban Board",
    addColumn: function(column) {
        this.element.append(column.element);
        initSortable();
    },
    element: $("#board .column-container")
}; // board

$(".create-column").click(function() {
    var columnName = prompt("Enter a new column name.");
    $.ajax({
        url: baseUrl + '/column',
        method: 'POST',
        data: {
            name: columnName
        },
        success: function(response){
            var column = new Column(response.id, columnName);
            board.addColumn(column);    //createColumn
        }
    });
});

function initSortable() {
    $(".column-card-list").sortable({
        connectWith: ".column-card-list",
        placeholder: "card-placeholder"
    }).disableSelection();
}