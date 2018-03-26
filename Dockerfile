FROM cypress/base:8
RUN \
  wget -q -O - https://dl-ssl.google.com/linux/linux_signing_key.pub | apt-key add - && \
  echo "deb http://dl.google.com/linux/chrome/deb/ stable main" > /etc/apt/sources.list.d/google.list && \
  apt-get update && \
  apt-get install -y dbus-x11 google-chrome-stable apt-transport-https && \
  rm -rf /var/lib/apt/lists/*
ENV DBUS_SESSION_BUS_ADDRESS=/dev/null
ENV npm_config_unsafe_perm true
WORKDIR /code
ADD . /code
RUN npm install --quiet
CMD /bin/bash
