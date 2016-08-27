#!/bin/sh

SCRIPT_DIR=`dirname $0`

case $1 in
    --help|help)
        echo "Usage: ./helper.sh [start|dns|log|restart|ssh|stop|data|db|destroy] \n\n \
start      - Starts the services in the background \n \
dns        - Prints out information needed for your /etc/hosts file \n \
log        - Outputs recent logs from all containers. Stop with Ctrl-C \n \
restart    - Restart the services in the background \n \
ssh        - Provides an interactive bash shell in the API container \n \
stop       - Halts execution of the service containers \n \
data       - Attempts to load a mysql dump file in the nodejs-example/sql/ directory into the DB \n \
db         - Opens an interactive mysql shell \n \
migrate    - Runs all DB migrations \n \
destroy    - Stops the services, removes the containers \n"
        ;;
    start)
        # Starts the docker machine, prints the IP address, and starts the services in the background
        (cd $SCRIPT_DIR/docker && docker-compose up -d)
        ;;
    dns)
        echo "# Place these lines in your /etc/hosts file"
        echo "127.0.0.1 nodejs-api.dev"
        ;;
    log)
        # Outputs recent logs from all containers. Stop with Ctrl-C
        (cd $SCRIPT_DIR/docker && docker-compose logs -f)
        ;;
    restart)
        # Restart the services in the background
        (cd $SCRIPT_DIR/docker && docker-compose restart)
        ;;
    ssh)
        # Provides an interactive bash shell in the API container
        (cd $SCRIPT_DIR/docker && docker-compose exec nodejs-example /bin/bash)
        ;;
    stop)
        # Halts execution of the service containers
        (cd $SCRIPT_DIR/docker && docker-compose stop)
        ;;
    db)
        # Opens an interactive mysql shell
        (cd $SCRIPT_DIR/docker && docker-compose exec mysql /bin/bash -c 'mysql -uroot -Dnodejs -plecaoquochung')
        ;;
    install)
        # Outputs recent logs from all containers. Stop with Ctrl-C
        (cd $SCRIPT_DIR/docker && docker-compose exec nodejs-example /bin/bash -c 'npm install')
        ;;
    destroy)
        # Stops the services, removes the containers
        (cd $SCRIPT_DIR/docker && docker-compose down)
        ;;
    *)
        echo "Docker Shell Helper: missing param"
        echo "Usage:"
        echo "Params: [start|dns|log|restart|ssh|stop|data|db|destroy]"
        echo "./docker.sh [PARAM]"
        ;;
esac
