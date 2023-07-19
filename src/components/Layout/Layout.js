import React from 'react';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

import './layout.scss';

function Layout(props) {
    return (
        <>
            <header 
                className={cn(
                    'toolbar',
                )}
            >
                <Navbar 
                    color="light"
                    expand="md"
                    className={cn(
                        'd-flex'
                    )} 
                >
                    <Link
                        className={cn(
                            'p-1',
                        )}
                        to={{
                            pathname: '/recipes'
                        }}
                    >
                        Home
                    </Link>
                </Navbar>
            </header>
            <main className={cn('content')}>
                {props.children}
            </main>
        </>
    );
}

export default Layout;