interface Deployment {
    users: [User]
}

interface User {
    name: string,
    phone: number,
    deployedActionPacks: []
}

let mockUsers = [{name: "steve browning", phpne: 9054833790, deployedQctionPacks:[1,2,3,4]}]

interface RemindFilter {
    isNotStarted: () => {},
    isNotCompleted: () => {},
}

class LearnReminderService { /**{*/
    /**
     * @param \App\Enums\ReminderFilter $reminder_filter
     * @param \App\Models\Deployment deployment
     *
     * @return \Illuminate\Database\Eloquent\Builder|\Illuminate\Database\Eloquent\Relations\BelongsToMany
     */
    // public function getUsersQuery(reminder_filter: RemindFilter, deployment: Deployment)
    // {
    //     let users;

    //     if (reminder_filter.isNotStarted()) {
    //         users = notStartedUsersQuery(deployment);
    //     } else if ($reminder_filter->isNotCompleted()) {
    //         users = $this->notCompletedUsersQuery(deployment);
    //     } else {
    //         users = deployment->users();
    //     }

    //     return users;
    // }

    /**
     * @param \App\Models\Deployment $deployment
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    //  private function notStartedUsersQuery(deployment:Deployment) 
    //  {
    //      return deployment.users?.deployedActionPacks;
    //  }

     /**
     * @param \App\Models\Deployment $deployment
     *
     * @return \Illuminate\Database\Eloquent\Builder
     */
    // public function notCompletedUsersQuery(deployment: Deployment)
    // {
        // return deployment.users()
        //     ->whereHas(
        //         'deployedActionPacks',
        //         function (Builder $builder) use ($deployment) {
        //             $builder
        //                 ->where('deployment_id', $deployment->id)
        //                 ->where('time_spent', '!=', 0)
        //                 ->whereNull('completed_at');
        //         }
        //     );
    // }
}