// import './App.css'

function Header(props) {
    console.log("props", props.title);
    return (
        <header>
            <h1>
                <a
                    href="/"
                    onClick={(e) => {
                        e.preventDefault(); /* 기본 이벤트 방지 */
                        props.onChangeMode();
                    }}
                >
                    {props.title}
                </a>
            </h1>
        </header>
    );
}
function Nav(props) {
    // const lis = [
    //   <li><a href="/read/1">html</a></li>,
    //   <li><a href="/read/2">css</a></li>,
    //   <li><a href="/read/3">js</a></li>
    // ];
    const lis = [];
    for (let i = 0; i < props.topics.length; i++) {
        let t = props.topics[i];
        lis.push(
            <li key={t.id}>
                <a
                    id={t.id}
                    href={"/read/" + t.id}
                    onClick={(e) => {
                        e.preventDefault();
                        props.onChangeMode(e.target.id);
                        //console.log(e.target.id);
                    }}
                >
                    {t.title}
                </a>
            </li>
        );
    }

    return (
        <nav>
            <ol>{lis}</ol>
        </nav>
    );
}
function Article(props) {
    return (
        <article>
            <h2>{props.title}</h2>
            {props.body}
        </article>
    );
}

function App() {
    let mode = "WELCOME";
    const topics = [
        { id: 1, title: "html", body: "html is ..." },
        { id: 2, title: "css", body: "css is ..." },
        { id: 3, title: "javascript", body: "javascript is ..." },
    ];

    let content = null;
    // CRUD(Create Read Update Delete)
    
    if (mode === "WELCOME") {
        content = <Article title="Welcome" body="Hello, Web"></Article>;
    } else if (mode === "READ") {
        content = <Article title="Welcome" body="Hello, Read"></Article>;
    }

    return (
        <div>
            {/* 헤더 */}
            {/* <Header /> */}
            <Header title="WEB" onChangeMode={() => {
              mode = 'WELCOME';
            }}></Header>
            {/* 내비게이션 */}
            <Nav
                topics={topics}
                onChangeMode={(id) => {
                    mode = 'READ';
                }}
            ></Nav>
            {/* 아티클 */}
            {content}
        </div>
    );
}

export default App;
