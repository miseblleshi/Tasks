import Card from './Card.jsx';

function Lists({ data }) {
    const ListItems = data.map((i, index) => 
        <Card
            key={index}
            id={index}
            title={i.title}
            task1={i.tasks.hasOwnProperty(0) ? i.tasks[0]['content'] : ""}
            task2={i.tasks.hasOwnProperty(1) ? i.tasks[1]['content'] : ""}
            onSelect={() => onSelectList(index)}
        />
    );

    return(
        <div id="lists">{ListItems}</div>
    )
}

export default Lists;