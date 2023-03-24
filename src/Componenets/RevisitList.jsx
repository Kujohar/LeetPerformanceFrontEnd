import data from '../assets/LeetCodeData-2023-03-06.json';

function RevisitList() {
    let LatestTen = []
    let i = 0
    while (LatestTen.length <= 10) {
        if (data[i].status_display == "Accepted") {
            LatestTen.push(data[i])
        }
        i += 1
    }
    console.log(LatestTen)

    const dataOrganizer = (submissionItem) => {
        return (
            <tr key={submissionItem.id}>
                <td className='border border-slate-700'>{submissionItem.title}</td>
                <td className='border border-slate-700'>{submissionItem.runtime}</td>
                <td className='border border-slate-700'>{submissionItem.memory}</td>
                <td className='border border-slate-700'>{submissionItem.status_display}</td>
                <td className='border border-slate-700'>{submissionItem.url}</td>
            </tr>
        )
    }


    const LatestSubTable = () => {

        let LatestTenTable = []
        LatestTen.forEach(item => {
            LatestTenTable.push(dataOrganizer(item))
        })

        return LatestTenTable
    }

    return (
        <div >
            <div className='p-4 text-2xl font-bold'>
                Incomplete solutions
            </div>
            <table className="table-fixed border-separate border-spacing-2 border border-slate-300">
                <thead>
                    <tr>
                        <th className='border border-slate-300'>Title</th>
                        <th className='border border-slate-300'>Runtime</th>
                        <th className='border border-slate-300'>Memory</th>
                        <th className='border border-slate-300'>Status</th>
                        <th className='border border-slate-300'>Link</th>
                    </tr>
                </thead>
                <tbody>
                    <LatestSubTable />
                </tbody>
            </table>
        </div>
    )
}


export default RevisitList