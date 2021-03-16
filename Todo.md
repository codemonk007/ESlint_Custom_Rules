route-check- done [needs more discussions on route validity]
version check - need to check
modelvalidity  - need to check
invalid method / depricated methods - done [discuss more to find out depricated methods]
no return in the method - done 
let const and var - done [discuss more on this]
double qoute/ single qoute - done
console logs - done
unused variables - done 
await in loop - Done
empty/undefined - done
restricted modules - done (need to discuss on this)
indent - done
semicolon - done
no cunstructor - [no need]
promise- [most of them are done . yet to discuss]
module exports- done


// my observation 
better to add it in pre commit hook by default so ther will not be any way developer could 
push bad code .
we can ovveriite the existing logic by passing kind of flag for any emegency commits
SonarQube integration
<!-- //docker run -d --name sonarqube -p 9000:9000 sonarqube -->
<!-- http://localhost:9000/ -->

<!-- http://localhost:9000/ -->

<!-- to run  -->
<!-- ./sonar-scanner \
  -Dsonar.projectKey=ESlint_POC \
  -Dsonar.sources=./server \
  -Dsonar.host.url=http://localhost:9000 \
  -Dsonar.exclusions=**/node_modules/** \
  -Dsonar.projectName=com.ESlint:ESlint-POC \
  -Dsonar.projectBaseDir=/Users/ganabhat/Desktop/mystack/ESlint_Custom_Rules/ES/ESlint_Custom_Rules \
  -Dsonar.login=3ce454d8ccc5561d9a2da46bd967db987e9d8747 -->


<!-- docker run -ti -v ${pwd}:/root/src — link sonarqube newtmitch/sonar-scanner:4 -D sonar.host.url=http://sonarqube:9000 -D sonar.scm.provider=git -D sonar.project
BaseDir=/root/src -D sonar.sources=. -D sonar.projectName=”com.ESlint:ESlint-POC” -D sonar.exclusions=**/node_modules/** -D sonar.sources=./server -D sonar.login=3ce454d8ccc5561d9a2da46bd967db987e9d8747 -->

<!-- docker run \
    --rm \
    -e SONAR_HOST_URL="http://${SONARQUBE_URL}" \
    -e SONAR_LOGIN="3ce454d8ccc5561d9a2da46bd967db987e9d8747" \
    -v "/Users/ganabhat/Desktop/mystack/ESlint_Custom_Rules/ES/ESlint_Custom_Rules:/usr/src" \
    sonarsource/sonar-scanner-cli -->