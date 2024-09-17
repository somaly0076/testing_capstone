import React from 'react'
import UserContent from '../../components/reusable/UserContent'
import Navbar from '../../components/reusable/Navbar'
import Footer from '../../components/reusable/Footer'
const AdminPanel = () => {
  return (
    <div>
        <Navbar/>
        <UserContent title={'សកលវិទ្យាល័យ ភូមិន្នភ្នំពេញ'} detail={'សកលវិទ្យាល័យ​ភូមិន្ទភ្នំពេញៈ​​ជា​សកល​វិទ្យាល័យ​ដែល​មាន​វ័យ​ចំណាស់​និង ​ធំ​ជាង​គេ​បង្អស់​​នៅ​កម្ពុជា​។ សកលវិទ្យាល័យ​នេះ​​មាន​ទីតាំង​ធំៗ​ចំនួន​បី​ដែល​ មាន​ទីតាំង​ស្ថិត​នៅ​រាជធានី​​ភ្នំពេញ​។​សកលវិទ្យាល័យ​ផ្តល់​ការអប់រំ​ កម្រិត​បរិញ្ញាប័ត្រ​និង​អនុបណ្ឌិត​។​​សកលវិទ្យាល័យ​នេះ​​ជា​គ្រឹះស្ថាន​ អប់រំ​ដ៏​សំខាន់​បណ្តុះបណ្តាល​គ្រូ​បង្រៀន​គ្រប់​ជំនាន់​។'} image={'https://pppenglish.sgp1.digitaloceanspaces.com/image/main/field/image/prime_minister_hun_sen_listens_to_culture_minister_phoeurng_sackona_speak_during_the_inauguration_of_a_new_royal_university_of_fine_arts_campus_on_may_24._spm.jpg'} views={423}/>
        <Footer />
    </div>
  )
}

export default AdminPanel