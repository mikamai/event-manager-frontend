# EventManager Frontend <!-- omit in toc -->

> EventManager Web Frontend

**Table of Contents**
- [Setup](#setup)
- [Development](#development)
  - [New Feature](#new-feature)
  - [New Hotfix](#new-hotfix)
  - [New Release](#new-release)

<br/>

## Setup

- Clone repo and switch to `develop` branch

```sh
git clone git@github.com:mikamai/event-manager-frontend.git

git checkout develop
```

- Install dependecies

```sh
yarn
```

- Setup `.env`
```sh
APP_NAME=Meetable

BACKEND_URL="https://app.domain.tld/graphql"

KEYCLOAK_URL="https://sso.domain.tld/auth"
KEYCLOAK_REALM="keycloak-realm"
KEYCLOAK_CLIENT_ID="keycloak-client-id"
```

---

## Development

**Choose your destiny!**

### New Feature

* Open a new branch and name it after the Trello card
  ```sh
  git checkout -b feature/<branch-name>

  git push --set-upstream origin feature/<branch-name>
  ```

  e.g: `[EM-FE-0001] New feature` -> `feature/EM-FE-0001_new_feature` 

* Commit your changes following [AngularJS Git Commit Message Convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message) (short version -> only use the first line)

* Push your commits to remote repo
  ```sh
  git push
  ```

* Open a `Pull Request` pointing to `develop` branch

---

### New Hotfix

* Checkout `master` branch
  ```sh
  git checkout master

  git pull
  ```

* Open a new branch and name it after the Trello card
  ```sh
  git checkout -b hotfix/<branch-name>

  git push --set-upstream origin hotfix/<branch-name>
  ```

* Commit changes [AngularJS Git Commit Message Convention](https://gist.github.com/stephenparish/9941e89d80e2bc58a153#format-of-the-commit-message) (short version -> only use the first line)
 
* Push your commits to remote repo
  ```sh
  git push
  ```

* Open a `Pull Request` pointing to `master` branch and one pointing to `develop`

---

### New Release

* Checkout `master` branch
  ```sh
  git checkout master

  git pull
  ```

* Checkout `develop` branch
  ```sh
  git checkout develop

  git pull
  ```

* Open a new branch and name it after the version to be released
  ```sh
  git checkout -b release/<released-version>

  git push --set-upstream origin release/<released-version>
  ```

  e.g. `release/v1.1`

* Increase project version using `yarn`
  ```sh
  yarn version --no-git-tag-version [--major | --minor | --patch]
  ```

* Commit version bump
  ```sh 
  git add package.json

  git commit -m "chore([major | minor | patch]): Bump version to <new-version>"
  ```

* Open a `Pull Request` pointing to `master` branch and one pointing to `develop`
