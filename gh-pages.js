import { publish } from 'gh-pages';

publish(
    'dist', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/dd0lynx/loopstudios-landing-page-frontend-mentor', // Update to point to your repository  
        user: {
            name: 'dd0lynx', // update to use your name
            email: 'danieldazure@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)