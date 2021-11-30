export const HomeView = ({saludo, texto}) => {

    // const {saludo, texto} = props;
    return (
        <div>
            <h2> {saludo} </h2>
            <hr></hr>
            <p>  {texto} </p>
        </div>
    )
}
