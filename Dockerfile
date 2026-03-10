FROM node:20

WORKDIR /app

COPY package*.json ./

# Remove problematic workspace:* devDependency but keep others (e.g. Angular CLI)
RUN node -e "const fs=require('fs');const p=require('./package.json');if(p.devDependencies && p.devDependencies['@web-bench/test-util']){delete p.devDependencies['@web-bench/test-util'];}fs.writeFileSync('package.json',JSON.stringify(p,null,2));" \
    && npm install

COPY . .

ENV EVAL_PROJECT_ROOT=src
ENV EVAL_PROJECT_PORT=5173

EXPOSE 5173

CMD ["bash", "-lc", "cd ${EVAL_PROJECT_ROOT:-src} && npx ng serve --port ${EVAL_PROJECT_PORT:-5173} --host 0.0.0.0"]
