function Dog(){
    return (
        <Puddy name="Max" bowlShape="square" bowlStatus="full" />
    );
}

function Puppy(props){
    return (
        <div>
            {props.name} has <Bowl bowlShape="square" bowlStatus="full" />
        </div>
    );
};

function Bowl(props){
    return (
        <span>
            {props.bowlShape}-shaped bowl, and it's currently {props.bowlStatus}
        </span>
    );
};
