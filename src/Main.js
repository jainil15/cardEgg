import './styles/Main.css'
export default function Main() {
    return (
        <div className="middle">
            <div className="middle--header">
                <h2>Egg man</h2>
                <p>professional breakfast</p>
                <small>2 months</small>
            </div>

            <div className="middle--buttons">
                <a href="https://in.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/49/49656.png" />Linkden</a>
                <a href="https://in.linkedin.com/"><img src="https://cdn-icons-png.flaticon.com/512/666/666162.png" />Email</a>
            </div>

            <div className="about">
                <h2>About</h2>
                <small>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries.</small></div>
            <div className="about">
                <h2>Intrests</h2>
                <small>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here',</small></div>
        </div>

    );
}
