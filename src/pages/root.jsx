import {Link, Outlet, useLoaderData} from "react-router-dom";
import {getContacts} from "../contacts";

export const Root = () => {
    const {contacts} = useLoaderData();
    return (
        <>
            <div id="sidebar">
                <h1>React Router Contacts</h1>
                <div>
                    <form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search contacts"
                            placeholder="Search"
                            type="search"
                            name="q"
                        />
                        <div
                            id="search-spinner"
                            aria-hidden
                            hidden={true}
                        />
                        <div
                            className="sr-only"
                            aria-live="polite"
                        ></div>
                    </form>
                    <form method="post">
                        <button type="submit">New</button>
                    </form>
                </div>
                <nav>
                    {/*
                    <ul>
                        <li>
                            {/*
                                 나쁜코드
                                     <a href={`/contacts/1`}>Your Name</a>
                                    페이지 전체를 새로 요청함

                                 좋은 코드
                                     <Link to={`/contacts/1`}>Your Name</Link>
                                     페이지에서 교체가 필요한 일부만 렌더링 함

                            <Link to={`/contacts/1`}>Your Name</Link>
                        </li>
                        <li>
                            <Link to={`/contacts/2`}>Your Friend</Link>
                        </li>
                    </ul>
                    */}
                    {contacts.length ? (
                        <ul>
                            {contacts.map((contact) => (
                                <li key={contact.id}>
                                    <Link to={`contacts/${contact.id}`}>
                                        {contact.first || contact.last ? (
                                            <>
                                                {contact.first} {contact.last}
                                            </>
                                        ) : (
                                            <i>No Name</i>
                                        )}{" "}
                                        {contact.favorite && <span>★</span>}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>
                            <i>No contacts</i>
                        </p>
                    )}
                </nav>
            </div>


            <div id="detail">
                <Outlet/>
            </div>
        </>
    );
}

export async function loader() {
    const contacts = await getContacts();
    return {contacts};
}