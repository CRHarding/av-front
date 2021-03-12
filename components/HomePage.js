import React, { Component } from 'react';
import axios from 'axios';
import { Route, Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { pulse } from 'react-animations';

function HomePage (props) {
    return (
        <div>
            <form onSubmit={this.login}>
                <input
                    name='username'
                    type='text'
                    placeholder='username'
                    value={props.loginInChange}
                    onChange={props.loginOnChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='password'
                    value={props.username}
                    onChange={props.loginOnChange}
                />
                <input type='submit' calue='Login' />
            </form>
            <form onSubmit={props.login}>
                <input
                    name='username'
                    type='text'
                    placeholder='username'
                    value={props.username}
                    onChange={props.loginOnChange}
                />
                <input
                    name='password'
                    type='password'
                    placeholder='password'
                    value={props.password}
                    onChange={props.loginOnChange}
                />
                <input type='submit' value='Login'  />
            </form>
        </div>
    )
}

export default HomePage;