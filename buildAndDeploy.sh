#! /bin/bash

REPO="/home/jace/git/speedlify/"
TAILFILE="$REPO".buildlog
echo $(pwd)
#source=script
cd "$REPO"
echo pwd
echo $(pwd)
netlify build 2>&1 | tee $TAILFILE 
netlify deploy --prod
