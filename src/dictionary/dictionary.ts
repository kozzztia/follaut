

const dictionary = {
        login: 'Login',
        logout: 'Logout',
        register: 'Register',
        profile: 'Profile',
        home: 'Home'
}

const getDictionary = (key: keyof typeof dictionary): string => {
        return dictionary[key];
};

export default getDictionary
