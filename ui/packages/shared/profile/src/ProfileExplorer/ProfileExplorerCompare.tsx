// Copyright 2022 The Parca Authors
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import {QueryServiceClient} from '@parca/client';
import {Card, useURLState} from '@parca/components';
import {Query} from '@parca/parser';
import type {NavigateFunction} from '@parca/utilities';

import {ProfileDiffSource, ProfileSelection, ProfileViewWithData} from '..';
import ProfileSelector, {QuerySelection} from '../ProfileSelector';

interface ProfileExplorerCompareProps {
  queryClient: QueryServiceClient;

  queryA: QuerySelection;
  queryB: QuerySelection;
  profileA: ProfileSelection | null;
  profileB: ProfileSelection | null;
  selectQueryA: (query: QuerySelection) => void;
  selectQueryB: (query: QuerySelection) => void;
  selectProfileA: (source: ProfileSelection) => void;
  selectProfileB: (source: ProfileSelection) => void;
  closeProfile: (card: string) => void;

  navigateTo: NavigateFunction;
}

const ProfileExplorerCompare = ({
  queryClient,
  queryA,
  queryB,
  profileA,
  profileB,
  selectQueryA,
  selectQueryB,
  selectProfileA,
  selectProfileB,
  closeProfile,
  navigateTo,
}: ProfileExplorerCompareProps): JSX.Element => {
  const closeProfileA = (): void => {
    closeProfile('A');
  };

  const closeProfileB = (): void => {
    closeProfile('B');
  };

  const [compareAbsolute] = useURLState('compare_absolute');
  const [functionFilter] = useURLState('filter_by_function');

  return (
    <>
      <div className="flex justify-between gap-2">
        <Card className="p-2">
          <ProfileSelector
            queryClient={queryClient}
            querySelection={queryA}
            profileSelection={profileA}
            selectProfile={selectProfileA}
            selectQuery={selectQueryA}
            closeProfile={closeProfileA}
            enforcedProfileName={''}
            comparing={true}
            navigateTo={navigateTo}
            suffix="_a"
          />
        </Card>
        <Card className="p-2">
          <ProfileSelector
            queryClient={queryClient}
            querySelection={queryB}
            profileSelection={profileB}
            selectProfile={selectProfileB}
            selectQuery={selectQueryB}
            closeProfile={closeProfileB}
            enforcedProfileName={Query.parse(queryA.expression).profileName()}
            comparing={true}
            navigateTo={navigateTo}
            suffix="_b"
          />
        </Card>
      </div>
      <div className="grid grid-cols-1">
        {profileA != null && profileB != null ? (
          <div>
            <Card className="mt-2 px-6 py-4">
              <ProfileViewWithData
                queryClient={queryClient}
                profileSource={
                  new ProfileDiffSource(
                    profileA.ProfileSource(),
                    profileB.ProfileSource(),
                    Array.isArray(functionFilter) ? functionFilter[0] : functionFilter,
                    compareAbsolute === 'true'
                  )
                }
              />
            </Card>
          </div>
        ) : (
          <div>
            <div className="my-20 text-center">
              <p>Select a profile on both sides.</p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileExplorerCompare;
