import JobList from "../components/job/JobList"
import Pagination from "../components/reusable/Pagination";
import Footer from "../components/reusable/Footer"
import Navbar from "../components/reusable/Navbar"
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { setCurrentPage } from "../features/slices/paginationSlice";
import { fetchUniversities } from "../features/slices/universitySlice";
import { LoadingOverlay}  from "../components/reusable/Loading";
import ListContainer from "../components/reusable/ListContainer";

const JobPage = () => {
    const dispatch = useDispatch();
    // const [firstPage, setNextPage] = useState(1);
    let firstPage = 1
    const { currentPage, totalPage } = useSelector((state) => state.pagination);
    const { universities, loading, error } = useSelector((state) => state.universities);
    // console.log("jobs", jobs)
    console.log("university",universities)
    useEffect(() => {
        dispatch(fetchUniversities({ page: firstPage === 1 ? firstPage : currentPage, limit: 10, category: 'jobs', model: 'Job' }));
        firstPage++;
    }, [dispatch, currentPage]);
    console.log("this is first page number",firstPage)
    return (
        <div>
            <Navbar />
            <ListContainer>
            {loading&& <LoadingOverlay />}
            <JobList jobs={universities} currentpage={currentPage} totalpage={totalPage}/>
            <Pagination totalPage={totalPage} currentPage={currentPage} setCurrentPage={(page) => dispatch(setCurrentPage(page))} />
         </ListContainer>
            <Footer />
        </div>
    )
};

export default JobPage;