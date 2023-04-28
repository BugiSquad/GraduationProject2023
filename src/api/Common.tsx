/**
 * 사용환경에 따라 API URL을 반환합니다.
 */
export const getApiURL = () => {
    return process.env.NODE_ENV === 'production' ? "" : "http://localhost:8080/api";
}
