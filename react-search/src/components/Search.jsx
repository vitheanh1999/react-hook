import React, {Fragment, useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import * as actions from '../actions/search';
import { fetchListData } from '../sagas/search';
export default function Search() {
    const data = useSelector(state => state)
    const dispatch = useDispatch();
    dispatch(fetchListData);
    console.log(data);
    return (
        <Fragment>
            <ul>
                {data.hits.map(item => (
                <li key={item.objectID}>
                    <a href={item.url}>{item.title}</a>
                </li>
                ))}
            </ul>
        </Fragment>
    )
}
