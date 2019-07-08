import useLocalStorage from "./useLocalStorage";

export default function useUserToken() {
    return useLocalStorage("USER_TOKEN");
}
