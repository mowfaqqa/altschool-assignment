import { useState } from "react"
import useFetch from "../hooks/fetchHook"
import ReactPaginate from 'react-paginate'
import styled, { css } from "styled-components"

export const Users = () => {
  const { users, isLoading } = useFetch('https://randomuser.me/api/?results=97')
  console.log(users);
  const [pageNumber, setPageNumber] = useState(0)
  const usersPerPage = 9
  const pageVisited = usersPerPage * pageNumber
  const displayUsers = users && users.slice(pageVisited, pageVisited + usersPerPage).map((user) => {
    return <>
      <User key={user.cell}>
        <div><img src={user.picture.large} alt="" /></div>
        <Details>
          <Name>{user.name.title} {user.name.first} {user.name.last}</Name>
          <Email><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
          </svg>
            {user.email}</Email>
          <Num><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
          </svg>
            {user.phone}</Num>
        </Details>
      </User>
    </>
  })
  const pageCount = users && Math.ceil(users.length / usersPerPage)
  const changePage = ({ selected }) => setPageNumber(selected)
  // console.log(users.info);
  return (
    <div>
      <Head>All Community Members</Head>

      {isLoading ? <Grid>
        <User Skeleton></User><User Skeleton></User><User Skeleton></User><User Skeleton></User><User Skeleton></User><User Skeleton></User>
      </Grid> : <>
        <Grid>{displayUsers} </Grid>
        <ReactPaginate
          breakLabel='...'
          pageRangeDisplayed={3}
          nextLabel='Next'
          previousLabel='Prev'
          onPageChange={changePage}
          pageCount={pageCount}
          containerClassName='paginatebtns '
          activeClassName='activePaginateBtn'
          disabledClassName="disabled"
        />

      </>}

    </div>

  )
}
export default Users

const Head = styled.h1`
text-align: center;
font-family: gentona;
color: var(--dark);
@media (max-width:460px) {
  font-size: large;
}
`
const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
@media (max-width:460px) {

  grid-template-columns:none;
  height: auto;
}
`

const User = styled.div`
margin-left: 15px;
width:430px;
height: 128px;
margin-bottom: 30px;
display: flex;
background-image: linear-gradient(to right, var(--light) 0%, var(--med) 100%);

${props => props.Skeleton && css`
background-color: #c4c4c4;
`}

@media (max-width:460px) {
  width:310px;
  height:70px;

margin:10px auto;

}
`

const Details = styled.div`
display: grid;
grid-template-rows: 60px 30px auto;
font-size: 15px;
@media (max-width:460px) {
  font-size: 10px;
  grid-template-rows: 28px 15px auto;
  gap: 3px;
}
`
const Name = styled.div`
padding-left: 30px;
font-weight: bold;
font-size: 18px;
padding-top: 15px;
@media (max-width:460px) {
  font-size: 13px;

padding-top: 5px;

}
`

const Email = styled.div`
padding-left: 10px;
color: #d2d2d2;
`
const Num = styled.div`
padding-left: 10px;
color: #d2d2d2;
`
