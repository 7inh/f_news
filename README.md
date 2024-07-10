# f_news

In this project, we will create a fnews website. The website will have a logo, a search bar, and a list of news articles. The news articles will be displayed in a card format. Each card will have a title, a description, and a link to the full article.

The project will be built using HTML, CSS only. The project will be responsive and will look good on all devices.

The project will be built using the following components:

- Logo
- Search bar
- Profile icon
- Nav
- Expand nav
- spotlight
- brief
- word-run
- world cloud
- trending
- list-news-column
- list-news-block
- utility-lottery
- utility-football
- utility-weather
- short-video
- footer-summary
- footer-link
- footer-contact
- subscribe mail
- social media
- copy right

Color palette:

- Primary color: #f44336

## Task

1. **Logo**

- Find a logo for the project. Place it in the `assets` folder and link it in the logo component.
- The logo can be different depending on the window size and current theme
- Beside logo show geometric and current weather

2. **Search bar**

- Create a search bar that allows the user to search for news articles
- The search bar should have placeholder text "Search for news ..."
- When typing, show display a list of result
- In the end of the search bar, there should be a search button with a magnifying glass icon

3. **Profile icon**

- Find a svg icon for the profile icon. Place it in the `assets` folder and link it in the profile icon component.
- The first time, it should a login button - Login with google. When the user clicks on it, it should change to a profile icon with the user's name

4. **Nav**

- Create a nav bar with the following links: Home, World, Politics, Business, Tech, Science, Health, Sports, Arts, Travel, Style, Food, Opinion, Weather, Magazine, Video, Audio, Coupons
- The nav bar should be responsive and display in one row
- When the window is too small, the nav bar should collapse into a hamburger menu

5. **Expand nav**

- Create a nav bar that expands when the user clicks on the hamburger menu
- The nav bar should have the same links as the nav bar

6. **Spotlight**

- Create a spotlight section that displays the most important news article
- The spotlight section should have a title, a description, and a link to the full article

7. **Brief**

- Create a brief section that displays a list of news articles
- Each news article should have a title, a description, and a link to the full article

8. **Word-run**

- Create a word-run section that displays a list of news articles it will run from right to left
- Some time it change style display (example from opacity 0 to 1)

9. **World cloud**

- Create a world cloud section that displays a list of news articles in a cloud format

10. **Trending**

- Create a trending section that displays a list of trending news articles

11. **List-news-column**

- Create a list-news-column section that displays a list of news articles in a column format

12. **List-news-block**

- Create a list-news-block section that displays a list of news articles in a block format

13. **Utility-lottery**

- Create a utility-lottery section that displays a list of lottery news articles

14. **Utility-football**

- Create a utility-football section that displays a list of football news articles

15. **Utility-weather**

- Create a utility-weather section that displays the current weather

16. **Short-video**

- Create a short-video section that displays a list of short videos

17. **Footer-summary**

- Create a footer-summary section that displays a summary of the website

18. **Footer-link**

- Create a footer-link section that displays a list of links
- The links should be displayed in a column format as value as nav bar

19. **Footer-contact**

- Create a footer-contact section that displays a contact form
- It should have a name, email field
- It should have icon for each field

20. **Subscribe mail**

- Create a subscribe mail section that allows the user to subscribe to the website
- It should have an email field and a subscribe button

21. **Social media**

- Create a social media section that displays a list of social media icons
- The social media icons should be displayed in a column format

22. **Copy right**

- Create a copy right section that displays the copy right information and other legal information

## Before you start

### 1. **Pull the latest code from the `rework` branch and create your branch**

```bash
git pull origin rework
```

Create a new branch. Syntax: `git checkout -b f<task-index>/<component-name>` all letters should be lowercase

```bash
git checkout -b f1/logo
```

### 2. **Start working on your component**

#### Define CSS Variable for your component

- Open the `.css` file
- Remove the existing styles as background-color, min-height.
- Add a variable for the component. **Note**: Do not create a variable existing index.css file.
- Check `index.css` file to see if there is a variable that can be reused.
- Properties that can be defined as variables are: font-size, font-family, font-weight, color, background-color, border-radius, padding, margin, gap, z-index.

#### Convention

- All class names should be lowercase and separated by a hyphen. Eg. `logo`, `search-bar`, `profile-icon`, `nav`, `expand-nav`, `spotlight`, `brief`, `word-run`, `world-cloud`, `trending`, `list-news-column`, `list-news-block`, `utility-lottery`, `utility-football`, `utility-weather`, `short-video`, `footer-summary`, `footer-link`, `footer-contact`, `subscribe-mail`, `social-media`, `copy-right`.
- All variables should be lowercase and separated by a hyphen. The property name should have meaning. Eg. `--font-size`, `--font-family`, `--background-color-primary`, `--border-radius`, `--padding-small`, `--margin-large`, `--gap-medium`, `--z-index-medium`.
- File names you download should have meaning. All file names should be lowercase and separated by a hyphen. Eg. `logo.svg`, `profile-icon.svg`. Do not using 'icon.svg' or 'image.svg' as file name, it has to be more specific.
- All image, svgs files should be placed in the `assets` folder.
- Using icon by svg file, in this project we will use f-icon tag. You can use it by `<f-icon src="assets/profile-icon.svg"></f-icon>` and add style for it in your css file.

### Important

- Do not add new font, color, or any other style that is not in the design.
- Do not use any library or framework. In case you need to use a library or framework, please ask for permission.
- Do not use change any outside of your component. In case you need to change, please ask for permission.
- If you can not do it by css, you can use javascript to do it. But try to use css as much as possible.
- Check the console for any errors. Make sure the code is clean and there are no errors.

### 3. **When you are done, push the code to the branch**

```bash
git add .
git commit -m "feat: logo"
git push origin f1/logo
```

### 4. **Create a pull request**

You should review your code before creating a pull request. Make sure the code is clean, formatted, and follows the conventions.

- Go to the repository on Github
- Click on the `Pull requests` tab
- Click on the `New pull request` button
- Select the `rework` branch as the base branch
- Select your branch as the compare branch
- Click on the `Create pull request` button
- Add a title and a description to the pull request. Eg. `feat: logo`
- In the description, add a video of the component you created. In the video, show the component in different window sizes and themes
- Click on the `Create pull request` button

### 5. **Review the pull request**

- Open the slack channel "random" and ask for a review. Eg. `@reviewer please review my pull request. Here is the link: <link>`
- Wait for the reviewer to review the pull request
- If the reviewer has any comments, make the changes and push the code to the branch
- If the reviewer approves the pull request, merge the pull request by clicking on the `Merge pull request` button

### 6. **Delete the branch**

- After the pull request has been merged, delete the branch

```bash
git checkout rework
git branch -d f1/logo
```