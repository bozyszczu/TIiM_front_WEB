import axios from "axios";

const CLUB_API_BASE_URL = "http://localhost:8085/clubs";

class ClubService {

    getClubs() {
        return axios.get(CLUB_API_BASE_URL);
    }

    addClub(club) {
        return axios.post(CLUB_API_BASE_URL, club);
    }

    getClubById(clubId) {
        return axios.get(CLUB_API_BASE_URL + '/' + clubId);
    }

    updateClub(club, clubId) {
        return axios.put(CLUB_API_BASE_URL + '/' + clubId, club);
    }

    deleteClub(clubId) {
        return axios.delete(CLUB_API_BASE_URL + '/' + clubId);
    }
}

export default new ClubService()