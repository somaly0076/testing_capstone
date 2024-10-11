// src/pages/UniversityPage.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUniversities } from '../features/slices/universitySlice';
import { setCurrentPage } from '../features/slices/paginationSlice';
import { LoadingOverlay } from '../components/reusable/Loading';
import UniversityList from '../components/UniversityList';
import Navbar from '../components/reusable/Navbar';
import Footer from '../components/reusable/Footer';
import Pagination from '../components/reusable/Pagination';
import ListContainer from '../components/reusable/ListContainer';

const UniversityPage = () => {
    const dispatch = useDispatch();
    const { universities, loading, error } = useSelector((state) => state.universities);
    const { currentPage, totalPage } = useSelector((state) => state.pagination);

    useEffect(() => {
        dispatch(fetchUniversities({ page: currentPage || 1, limit: 10 ,category: 'Universities', model:'University'}));
    }, [dispatch, currentPage]);

    return (
        <div>
            <Navbar />
            <ListContainer>
                {loading && <LoadingOverlay />}
                {error && <p>{error}</p>}
                <UniversityList universities={universities} />
                <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={(page) => dispatch(setCurrentPage(page))}/>
            </ListContainer>
            <Footer />
        </div>
    );
};

export default UniversityPage;
